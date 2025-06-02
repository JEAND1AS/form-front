/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Formulário de Matrícula",
  description: "Formulário PBE - CEL e Franco'",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const escola = 'cel' // 🔥 Aqui você define estático ou baseado na rota

  return (
    <html lang="pt-br">
      <Head>
        {escola === 'cel' && (
          <link rel="icon" href="/globe.svg" type="image/svg+xml" />
        )}
        {escola !== 'cel' && (
          <link rel="icon" href="/vercel.svg" type="image/svg+xml" />
        )}
      </Head>
      <body>{children}</body>
    </html>
  )
}
