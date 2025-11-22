#!/bin/bash

OUTPUT_FILE="scripts/merged_src.txt"

# Clear the output file
> "$OUTPUT_FILE"

# Find all files in src/ not ignored by git
find src/ -type f | while read -r file; do
    # Skip .md files
    if [[ "$file" == *.md ]]; then
        continue
    fi
    if ! git check-ignore "$file" > /dev/null 2>&1; then
        echo "=== START: $file ===" >> "$OUTPUT_FILE"
        cat "$file" >> "$OUTPUT_FILE"
        echo "" >> "$OUTPUT_FILE"  # Add a newline
        echo "=== END: $file ===" >> "$OUTPUT_FILE"
        echo "" >> "$OUTPUT_FILE"
    fi
done

echo "Merged code saved to $OUTPUT_FILE"