import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import {
  Search,
  SlidersHorizontal,
  Grid3X3,
  List,
  MapPin,
  X,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import PropertyCard from "@/components/PropertyCard";
import SectionTitle from "@/components/SectionTitle";
import Loader from "@/components/Loader";

const propertyTypes = ["mansion", "villa", "penthouse", "estate", "palace"];
const locations = [
  "Beverly Hills",
  "Miami Beach",
  "Manhattan",
  "Malibu",
  "Palm Beach",
  "Hamptons",
];

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: "all",
    location: "all",
    bedrooms: "all",
    priceRange: [0, 50000000],
  });
  const [sortBy, setSortBy] = useState("newest");

  const { data: properties = [], isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: () => base44.entities.Property.list("-created_date", 50),
  });

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    // Search filter
    if (searchTerm) {
      result = result.filter(
        (p) =>
          p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.location?.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Type filter
    if (filters.type !== "all") {
      result = result.filter((p) => p.property_type === filters.type);
    }

    // Location filter
    if (filters.location !== "all") {
      result = result.filter((p) =>
        p.location?.toLowerCase().includes(filters.location.toLowerCase()),
      );
    }

    // Bedrooms filter
    if (filters.bedrooms !== "all") {
      const beds = parseInt(filters.bedrooms);
      if (beds === 6) {
        result = result.filter((p) => p.bedrooms >= 6);
      } else {
        result = result.filter((p) => p.bedrooms === beds);
      }
    }

    // Price filter
    result = result.filter(
      (p) =>
        p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1],
    );

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "beds":
        result.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
      case "sqft":
        result.sort((a, b) => b.sqft - a.sqft);
        break;
      default:
        result.sort(
          (a, b) => new Date(b.created_date) - new Date(a.created_date),
        );
    }

    return result;
  }, [properties, searchTerm, filters, sortBy]);

  const formatPrice = (price) => {
    if (price >= 1000000) return `$${(price / 1000000).toFixed(0)}M`;
    return `$${(price / 1000).toFixed(0)}K`;
  };

  const resetFilters = () => {
    setFilters({
      type: "all",
      location: "all",
      bedrooms: "all",
      priceRange: [0, 50000000],
    });
    setSearchTerm("");
  };

  const FiltersContent = () => (
    <div className="space-y-6">
      {/* Property Type */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 block">
          Property Type
        </label>
        <Select
          value={filters.type}
          onValueChange={(v) => setFilters({ ...filters, type: v })}
        >
          <SelectTrigger>
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {propertyTypes.map((type) => (
              <SelectItem key={type} value={type} className="capitalize">
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Location */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 block">
          Location
        </label>
        <Select
          value={filters.location}
          onValueChange={(v) => setFilters({ ...filters, location: v })}
        >
          <SelectTrigger>
            <SelectValue placeholder="All Locations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            {locations.map((loc) => (
              <SelectItem key={loc} value={loc}>
                {loc}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Bedrooms */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 block">
          Bedrooms
        </label>
        <Select
          value={filters.bedrooms}
          onValueChange={(v) => setFilters({ ...filters, bedrooms: v })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any</SelectItem>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <SelectItem key={n} value={n.toString()}>
                {n === 6 ? "6+" : n} {n === 1 ? "Bedroom" : "Bedrooms"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-4 block">
          Price Range: {formatPrice(filters.priceRange[0])} -{" "}
          {formatPrice(filters.priceRange[1])}
        </label>
        <Slider
          value={filters.priceRange}
          onValueChange={(v) => setFilters({ ...filters, priceRange: v })}
          max={50000000}
          min={0}
          step={500000}
          className="mt-2"
        />
      </div>

      <Button
        variant="outline"
        onClick={resetFilters}
        className="w-full border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white"
      >
        Reset Filters
      </Button>
    </div>
  );

  return (
    <div className="bg-[#f9f6f1] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-[#0b1c2d] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1c2d]/50 to-[#0b1c2d]" />

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Luxury <span className="text-[#d4af37]">Properties</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Explore our exclusive collection of the world's finest properties
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search & Filters Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 -mt-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search by property name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 text-lg border-gray-200"
              />
            </div>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-4">
              <Select
                value={filters.type}
                onValueChange={(v) => setFilters({ ...filters, type: v })}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type} className="capitalize">
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={filters.bedrooms}
                onValueChange={(v) => setFilters({ ...filters, bedrooms: v })}
              >
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Beds</SelectItem>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <SelectItem key={n} value={n.toString()}>
                      {n === 6 ? "6+" : n} Beds
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="beds">Most Bedrooms</SelectItem>
                  <SelectItem value="sqft">Largest Size</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="lg:hidden flex items-center gap-2"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter Properties</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FiltersContent />
                </div>
              </SheetContent>
            </Sheet>

            {/* View Toggle */}
            <div className="hidden lg:flex items-center gap-2 border rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${viewMode === "grid" ? "bg-[#0b1c2d] text-white" : "text-gray-500"}`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${viewMode === "list" ? "bg-[#0b1c2d] text-white" : "text-gray-500"}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Active Filters */}
          {(filters.type !== "all" ||
            filters.location !== "all" ||
            filters.bedrooms !== "all" ||
            searchTerm) && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
              {searchTerm && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#0b1c2d]/10 rounded-full text-sm">
                  Search: {searchTerm}
                  <button onClick={() => setSearchTerm("")}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {filters.type !== "all" && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#d4af37]/20 rounded-full text-sm capitalize">
                  {filters.type}
                  <button
                    onClick={() => setFilters({ ...filters, type: "all" })}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {filters.location !== "all" && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#d4af37]/20 rounded-full text-sm">
                  {filters.location}
                  <button
                    onClick={() => setFilters({ ...filters, location: "all" })}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {filters.bedrooms !== "all" && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#d4af37]/20 rounded-full text-sm">
                  {filters.bedrooms}+ Beds
                  <button
                    onClick={() => setFilters({ ...filters, bedrooms: "all" })}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-[#0b1c2d]">
              {filteredProperties.length}
            </span>{" "}
            properties
          </p>
        </div>

        {/* Properties Grid/List */}
        {isLoading ? (
          <Loader fullScreen={false} />
        ) : filteredProperties.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
            }
          >
            <AnimatePresence>
              {filteredProperties.map((property, idx) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  index={idx}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-semibold text-gray-700 mb-2">
              No Properties Found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your filters or search criteria
            </p>
            <Button
              onClick={resetFilters}
              className="bg-[#d4af37] hover:bg-[#b8962e] text-[#0b1c2d]"
            >
              Reset All Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
