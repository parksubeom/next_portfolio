import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>레이아웃</h1>
      <div>{children}</div>
    </>
  );
}
