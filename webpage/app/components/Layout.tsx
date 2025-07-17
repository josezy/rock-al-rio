"use client";
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex min-h-screen flex-col pt-12">
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </main>
  );
}