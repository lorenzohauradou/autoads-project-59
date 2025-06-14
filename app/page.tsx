'use client'

import React from "react"
import Image from "next/image"
import { Star, Shield, Truck, RotateCcw, Heart, Share2, Plus, Minus, Check, Zap, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-xl">VeggiePro</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Kitchen Tools
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Recipes
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Support
                            </span>
                        </nav>
                        <div className="flex items-center space-x-3">
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Heart className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Product Section */}
            <section className="py-8 sm:py-12 lg:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-sm">
                                <Image
                                    src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/1f1c2837-f1e1-4418-867a-848958c455fc.jpg?"
                                    alt="Ibergrif Vegetable Spiralizer - Main View"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                {[
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/73c6658c-c9d3-4c96-a7d9-456a135cf29c.jpg?", alt: "Spiralizer in action" },
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/4f1b13a4-f011-4812-8517-bc75307ba895.jpg?", alt: "Vegetable spirals close-up" },
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/daf0b282-dbff-417c-bd74-71c0adc170e1.jpg?", alt: "Safety features" },
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/148e94b3-bc9b-4c8b-8d5c-7be26a1c3015.jpg?", alt: "Complete product view" },
                                ].map((image, i) => (
                                    <div
                                        key={i}
                                        className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-slate-300 hover:scale-105 transition-all duration-200"
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={150}
                                            height={150}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6 lg:space-y-8">
                            <div className="space-y-4">
                                <Badge variant="secondary" className="text-xs font-medium">
                                    🥗 Healthy Living Essential
                                </Badge>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                                    Ibergrif Vegetable Spiralizer
                                </h1>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-600 font-medium">(3,847 reviews)</span>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                    Transform ordinary vegetables into stunning spiral creations in seconds! Professional-grade spiralizer with advanced safety features and premium construction.
                                </p>
                            </div>

                            {/* Price */}
                            <div className="space-y-3">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-4xl font-bold text-slate-900">$29.99</span>
                                    <span className="text-xl text-slate-500 line-through">$39.99</span>
                                    <Badge variant="destructive" className="text-sm font-semibold">
                                        25% OFF
                                    </Badge>
                                </div>
                                <p className="text-sm font-medium text-green-600 flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    In stock - Ships within 24 hours
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: Shield, text: "Safe Design" },
                                    { icon: Sparkles, text: "Easy Clean" },
                                    { icon: Clock, text: "Quick Spirals" },
                                    { icon: Zap, text: "Durable Build" },
                                ].map((feature, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                                    >
                                        <feature.icon className="h-5 w-5 text-slate-700" />
                                        <span className="font-medium text-sm">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <span className="font-medium text-slate-700">Quantity:</span>
                                    <div className="flex items-center border-2 border-slate-200 rounded-xl overflow-hidden">
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="px-6 py-3 min-w-[4rem] text-center font-medium">1</span>
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Button
                                        size="lg"
                                        className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                    >
                                        Transform Your Vegetables Now - $29.99
                                    </Button>
                                    <Button variant="outline" size="lg" className="w-full h-14 text-lg font-semibold rounded-xl border-2">
                                        Start Your Healthy Journey - Buy Now
                                    </Button>
                                </div>
                            </div>

                            {/* Trust Signals */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                                <div className="text-center space-y-2">
                                    <Truck className="h-7 w-7 mx-auto text-slate-600" />
                                    <div>
                                        <p className="text-sm font-semibold">Free Shipping</p>
                                        <p className="text-xs text-slate-500">Orders over $25</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <RotateCcw className="h-7 w-7 mx-auto text-slate-600" />
                                    <div>
                                        <p className="text-sm font-semibold">30-Day Returns</p>
                                        <p className="text-xs text-slate-500">Hassle-free</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <Shield className="h-7 w-7 mx-auto text-slate-600" />
                                    <div>
                                        <p className="text-sm font-semibold">Premium Quality</p>
                                        <p className="text-xs text-slate-500">Guaranteed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Tabs */}
            <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue="features" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 h-12 p-1 bg-white rounded-xl shadow-sm">
                                <TabsTrigger value="features" className="rounded-lg font-medium">
                                    Features
                                </TabsTrigger>
                                <TabsTrigger value="specs" className="rounded-lg font-medium">
                                    Specifications
                                </TabsTrigger>
                                <TabsTrigger value="reviews" className="rounded-lg font-medium">
                                    Reviews
                                </TabsTrigger>
                                <TabsTrigger value="faq" className="rounded-lg font-medium">
                                    FAQ
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="features" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-slate-900">Why Choose Ibergrif Spiralizer?</h3>
                                        <div className="space-y-5">
                                            {[
                                                {
                                                    title: "Safety First Design",
                                                    description: "Innovative protective features keep your fingers safe while creating perfect spirals",
                                                },
                                                {
                                                    title: "Versatile Performance",
                                                    description: "Works with zucchini, carrots, cucumbers, potatoes, and many more vegetables",
                                                },
                                                {
                                                    title: "Effortless Cleaning",
                                                    description: "Dishwasher-safe components and easy-rinse design for quick cleanup",
                                                },
                                                {
                                                    title: "Time-Saving",
                                                    description: "Create beautiful vegetable spirals in seconds with minimal effort",
                                                },
                                            ].map((feature, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                                    <div className="space-y-1">
                                                        <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                                                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="aspect-video bg-white rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/73c6658c-c9d3-4c96-a7d9-456a135cf29c.jpg?"
                                            alt="Spiralizer creating vegetable noodles"
                                            width={480}
                                            height={360}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="specs" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <Card className="shadow-sm border-0">
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl">Technical Specifications</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {[
                                                { label: "Material", value: "Premium BPA-Free Plastic" },
                                                { label: "Blade Type", value: "Stainless Steel" },
                                                { label: "Container", value: "Transparent Collection Bowl" },
                                                { label: "Base", value: "Non-Slip Suction" },
                                                { label: "Dimensions", value: '6" x 6" x 8"' },
                                                { label: "Weight", value: "1.2 lbs" },
                                                { label: "Dishwasher Safe", value: "Yes" },
                                                { label: "Warranty", value: "Lifetime" },
                                            ].map((spec, i) => (
                                                <div
                                                    key={i}
                                                    className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0"
                                                >
                                                    <span className="text-slate-600 font-medium">{spec.label}</span>
                                                    <span className="font-semibold text-slate-900">{spec.value}</span>
                                                </div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-slate-900">What's in the Box</h3>
                                        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                                            {[
                                                "1x Ibergrif Vegetable Spiralizer",
                                                "1x Collection Container",
                                                "1x Safety Grip Handle",
                                                "1x Recipe Guide",
                                                "1x User Manual",
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <Check className="h-5 w-5 text-green-500" />
                                                    <span className="text-slate-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="reviews" className="mt-8">
                                <div className="space-y-8">
                                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                                        <Card className="shadow-sm border-0 bg-white">
                                            <CardContent className="pt-8 text-center">
                                                <div className="text-4xl font-bold mb-3 text-slate-900">4.9</div>
                                                <div className="flex justify-center mb-3">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                                <p className="text-sm text-slate-600 font-medium">Based on 3,847 reviews</p>
                                            </CardContent>
                                        </Card>
                                        <div className="md:col-span-2 space-y-4">
                                            {[5, 4, 3, 2, 1].map((stars) => (
                                                <div key={stars} className="flex items-center gap-4">
                                                    <span className="text-sm font-medium w-8">{stars}★</span>
                                                    <div className="flex-1 bg-slate-200 rounded-full h-3">
                                                        <div
                                                            className="bg-yellow-400 h-3 rounded-full transition-all duration-300"
                                                            style={{ width: stars === 5 ? "85%" : stars === 4 ? "10%" : "5%" }}
                                                        />
                                                    </div>
                                                    <span className="text-sm text-slate-600 font-medium w-16 text-right">
                                                        {stars === 5 ? "3,270" : stars === 4 ? "385" : "192"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            {
                                                name: "Emily Thompson",
                                                avatar: "ET",
                                                rating: 5,
                                                date: "3 days ago",
                                                title: "Game changer for healthy eating!",
                                                content:
                                                    "This spiralizer has completely transformed how I prepare vegetables. My kids actually ask for zucchini noodles now!",
                                            },
                                            {
                                                name: "James Wilson",
                                                avatar: "JW",
                                                rating: 5,
                                                date: "1 week ago",
                                                title: "Professional quality at home",
                                                content:
                                                    "The safety features are excellent and it creates perfect spirals every time. Worth every penny for keto dieters.",
                                            },
                                            {
                                                name: "Maria Garcia",
                                                avatar: "MG",
                                                rating: 5,
                                                date: "2 weeks ago",
                                                title: "So easy to use and clean",
                                                content:
                                                    "I was skeptical at first but this tool is amazing. Dishwasher safe and creates restaurant-quality veggie noodles.",
                                            },
                                        ].map((review, i) => (
                                            <Card key={i} className="shadow-sm border-0 bg-white">
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start gap-4">
                                                        <Avatar className="h-12 w-12">
                                                            <AvatarFallback className="bg-slate-100 text-slate-700 font-semibold">
                                                                {review.avatar}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1 space-y-2">
                                                            <div className="flex items-center gap-3 flex-wrap">
                                                                <span className="font-semibold text-slate-900">{review.name}</span>
                                                                <div className="flex">
                                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                                        <Star
                                                                            key={star}
                                                                            className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                                <span className="text-sm text-slate-500">{review.date}</span>
                                                            </div>
                                                            <h4 className="font-semibold text-slate-900">{review.title}</h4>
                                                            <p className="text-slate-600 leading-relaxed">{review.content}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="faq" className="mt-8">
                                <div className="max-w-4xl mx-auto">
                                    <Accordion type="single" collapsible className="w-full space-y-4">
                                        {[
                                            {
                                                question: "What vegetables can I spiralize?",
                                                answer:
                                                    "You can spiralize zucchini, carrots, cucumbers, potatoes, sweet potatoes, beets, and many other firm vegetables. Softer vegetables like tomatoes won't work well.",
                                            },
                                            {
                                                question: "Is it really dishwasher safe?",
                                                answer:
                                                    "Yes! All components are dishwasher safe. We recommend placing them on the top rack for best results.",
                                            },
                                            {
                                                question: "How do the safety features work?",
                                                answer:
                                                    "The spiralizer features a protective grip that keeps your fingers away from the blades, plus a non-slip base for stability during use.",
                                            },
                                            {
                                                question: "Can I make different spiral sizes?",
                                                answer:
                                                    "This model creates one consistent spiral size that's perfect for most recipes. The spirals are similar to spaghetti thickness.",
                                            },
                                            {
                                                question: "What if I'm not satisfied?",
                                                answer:
                                                    "We offer a 30-day money-back guarantee and lifetime warranty. If you're not completely satisfied, we'll make it right.",
                                            },
                                        ].map((faq, i) => (
                                            <AccordionItem
                                                key={i}
                                                value={`item-${i}`}
                                                className="bg-white rounded-xl px-6 shadow-sm border-0"
                                            >
                                                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 lg:mb-12 text-center lg:text-left">
                            Complete Your Kitchen
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                            {[
                                { name: "Vegetable Chopper", price: "$19.99", image: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/4f1b13a4-f011-4812-8517-bc75307ba895.jpg?" },
                                { name: "Mandoline Slicer", price: "$24.99", image: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/daf0b282-dbff-417c-bd74-71c0adc170e1.jpg?" },
                                { name: "Salad Spinner", price: "$16.99", image: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/148e94b3-bc9b-4c8b-8d5c-7be26a1c3015.jpg?" },
                                { name: "Food Storage Set", price: "$22.99", image: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/1f1c2837-f1e1-4418-867a-848958c455fc.jpg?" },
                            ].map((product, i) => (
                                <Card
                                    key={i}
                                    className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm"
                                >
                                    <CardContent className="p-4">
                                        <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl mb-4 overflow-hidden">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={200}
                                                height={200}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <h3 className="font-semibold mb-2 text-slate-900 text-sm lg:text-base">{product.name}</h3>
                                        <p className="text-lg font-bold text-slate-900">{product.price}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Simplified Footer */}
            <footer className="border-t bg-slate-50 py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-xl">VeggiePro</span>
                        </div>
                        <p className="text-sm text-slate-600 text-center sm:text-right">© 2024 VeggiePro. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}