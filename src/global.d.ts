// src/custom.d.ts

declare global {
    interface String {
      createSolidBorder(color: string, direction?: string): string;
      createCustomBorder(symbol?: string, direction?: string, color?: string): string;
      createDashedBorder(color?: string, direction?: string): string;
      createDottedBorder(color: string, direction?: string): string;
      createDoubleBorder(color?: string, direction?: string): string;
      createRoundedBorder(color: string, direction?: string): string;
      createSolidBorder2(color?: string, direction?: string): string;
      color(color?: string): string;
      multiColors(colors: string): string;
      multiBg(colors: string): string;
      bg(color: string): string;
    }
  }
  
  export {};
  