# Rock al Rio Festival Data

This repository contains data about the Rock al Rio music festival, structured in a way that's optimized for AI analysis and understanding.

## Contents

- `flyers-data.json`: Structured data about each year's festival
- Image files: Festival flyers for each year (2009, 2012-2018, 2020-2022, 2024)

## JSON Structure

The `flyers-data.json` file has been organized to be extremely AI-friendly with the following structure:

### Metadata Section

Contains general information about the festival and dataset:
- Festival name, type, and location
- Languages used on flyers
- Total number of flyers
- Years the festival has been active

### Schema Section

Provides explicit descriptions of data fields to ensure they're interpreted correctly.

### Events Section

Contains one entry per festival year with:
- Year and image filename
- Full path to the image file
- Lists for bands and headliners (currently placeholders)
- Venue and date information (currently placeholders)
- Stage information
- Genre focus
- Additional context for each year

### Relationships Section

Tracks patterns across years:
- Recurring bands
- Festival evolution over time
- Notable milestone years

### Tips for AI Analysis

Explicit guidance for AI systems on how to interpret festival flyers:
- How to detect band hierarchy from font sizes
- Where to look for dates, venues, and ticket information
- Context clues for understanding the festival's evolution

## How to Use

1. Use this JSON file in conjunction with the flyer images to analyze the festival's history
2. Replace "PLACEHOLDER" fields with actual information from the flyers
3. AI systems can use the structure to better understand relationships between events

## For AI Analysis

When analyzing these festival flyers, consider:
- Band names are typically arranged by importance (headliners in larger text)
- Logos and stylistic elements often remain consistent across years
- Festival growth can be tracked through venue changes, number of bands, etc.
- Historical context of music trends for each year
