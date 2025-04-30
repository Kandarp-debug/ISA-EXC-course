import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function ModernUiLayout() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white text-center py-20 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                    Modern UI Workshop
                </h1>
                <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
                    Learn to build stunning user interfaces with modern tools and techniques.
                </p>
                <Button className="mt-8 bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full shadow-lg transition-colors duration-300">
                    Get Started
                </Button>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {["Responsive Design", "Reusable Components", "Easy Customization"].map((feature, idx) => (
                        <Card key={idx} className="shadow-md">
                            <CardHeader>
                                <CardTitle>{feature}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Learn how to build {feature.toLowerCase()} with React and TailwindCSS.</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Participants Say</h2>
                <Accordion className="max-w-3xl mx-auto">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>"The most practical UI workshop I've attended!"</AccordionTrigger>
                        <AccordionContent>
                            It made modern UI concepts so easy to understand and apply. Loved the tools we used.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>"TailwindCSS and ShadCN are a game changer!"</AccordionTrigger>
                        <AccordionContent>
                            This workshop showed me how to build interfaces that not only look great but also scale well.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            {/* Footer Section */}
            <footer className="py-6 text-center text-sm text-gray-600 bg-gray-100">
                <p>&copy; 2025 Modern UI Workshop. All rights reserved.</p>
                <div className="mt-2 flex justify-center space-x-4">
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Contact</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </div>
            </footer>
        </div>
    );
}
