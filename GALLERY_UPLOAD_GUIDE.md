# Gallery Upload Guide

## Preview/upload mode

Open the website using:

```text
?gallery=edit#gallery
```

Example:

```text
https://username.github.io/repository/?gallery=edit#gallery
```

You can choose or drag multiple JPG, PNG, WebP, or GIF images. The browser stores these files locally with IndexedDB. They will remain visible on the same browser and domain after refresh, while upload/delete controls stay hidden for normal visitors.

## Important GitHub Pages limitation

GitHub Pages is a static hosting service and cannot receive permanent file uploads from a public webpage. Local uploads are therefore a private preview tool only.

## Publish images permanently

1. Copy optimized images into `assets/gallery/`.
2. Add a new `<figure>` inside `#galleryGrid` in `index.html`.
3. Use a descriptive caption and alt text.
4. Commit and push the new image files and updated `index.html` to GitHub.

Example:

```html
<figure class="gallery-item reveal">
  <img src="assets/gallery/project-photo.webp" alt="Cross-functional improvement workshop" loading="lazy">
  <figcaption>Cross-functional improvement workshop</figcaption>
</figure>
```

For good performance, use WebP when possible and keep each image below approximately 500 KB.
