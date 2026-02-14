

# Fix Color Scheme: Consistent Light Theme

## Problem
The current CSS has a mix of dark-mode values (dark backgrounds `250 20% 12%`) in the deployed code, while your uploaded `index.css` switched to white backgrounds but left `--muted`, `--muted-foreground`, `--border`, and `--accent` values too dark/opaque for a light theme. This creates illegible text and harsh contrasts.

## Solution
Apply a polished, consistent **light theme** with purple and blue accents that feels eye-catching and professional.

## Color Palette

| Token | Current (broken) | New Value | Visual |
|-------|------------------|-----------|--------|
| `--background` | `0 0% 100%` (white) | `0 0% 100%` (keep white) | Clean white base |
| `--foreground` | `222 10% 8%` | `222 47% 11%` | Near-black text |
| `--card` | `0 0% 100%` | `0 0% 100%` | White cards |
| `--muted` | `217 10% 8%` (near black!) | `220 14% 96%` | Light gray |
| `--muted-foreground` | `222 10% 8%` (near black!) | `220 9% 46%` | Medium gray |
| `--accent` | `268 60% 20%` (too dark) | `268 100% 96%` | Very light purple tint |
| `--accent-foreground` | `268 100% 75%` | `268 80% 45%` | Readable purple |
| `--border` | `214 10% 10%` (near black!) | `220 13% 91%` | Subtle light border |
| `--input` | `214 10% 10%` | `220 13% 91%` | Matching input borders |
| `--destructive-foreground` | `222 10% 8%` | `0 0% 100%` | White on red |

## Component Updates

All portfolio components currently use classes like `bg-card`, `bg-muted/30`, `text-muted-foreground`, `border-border`, and `glow-border` -- these will automatically look correct once the CSS variables are fixed. A few targeted tweaks:

1. **index.css** -- Replace all `:root` variable values with the corrected light-theme palette. Clean up `.bg-gradient-purple` (currently pink-shifted `hsl(295/304)`) back to proper purple. Remove `.dark` prefixed rules (not needed for single-theme). Add a subtle `.bg-section-alt` for alternating section backgrounds.

2. **Navbar.tsx** -- Update scrolled state from `bg-background/90` to `bg-white/80` with backdrop blur for a modern glass effect.

3. **Hero.tsx** -- Adjust background radial gradients to use lighter, more visible purple/blue tints appropriate for white backgrounds.

4. **Stats.tsx** -- Change `bg-muted/30` section background to use the new `.bg-section-alt` utility for a subtle purple-tinted alternating background.

5. **Writing.tsx** -- Same alternating background treatment.

6. **Projects.tsx** -- Same alternating background treatment.

7. **Experience.tsx**, **Differentiators.tsx**, **Skills.tsx**, **Contact.tsx**, **Footer.tsx** -- Minor class adjustments where `bg-card/80` or `glow-border` may need softer shadow/border values for the light theme. The glow-border utility will be softened in the CSS.

## Files Changed
- `src/index.css` -- Main fix: all CSS variable values corrected for light theme
- `src/components/portfolio/Navbar.tsx` -- Glass-style scrolled state
- `src/components/portfolio/Hero.tsx` -- Lighter background gradients
- `src/components/portfolio/Stats.tsx` -- Section alt background
- `src/components/portfolio/Writing.tsx` -- Section alt background
- `src/components/portfolio/Projects.tsx` -- Section alt background

