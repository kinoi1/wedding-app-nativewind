import React from 'react';
import Navigation from '@/navigation';
// import "./global.css";

/**
 * Root App Component
 * -------------------
 * Ini adalah entry utama aplikasi React Native lintas platform (Android, iOS, Web).
 * Di sini kita bisa menambahkan:
 * - Navigation (misal React Navigation)
 * - Theme Provider
 * - State Management (Redux / Zustand / Recoil)
 */

export default function App() {
  return (
      <Navigation />
  );
}
