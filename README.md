# Agung Arimbawa — Manufacturing Excellence Portfolio

Static portfolio website built with pure HTML, CSS, and JavaScript. No build step, framework, or package installation is required.

## Preview locally

Open `index.html` directly, or run a lightweight local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload every file and folder from this project to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.

## Content you should replace

- Replace the portrait placeholder with `assets/profile.jpg` and change the corresponding HTML block to an `<img>`.
- Replace SVG gallery placeholders in `assets/gallery/` with real, approved factory/project images.
- Add verified LinkedIn or GitHub URLs if available.
- Add verified certifications only when certificate details are available.
- Edit project content in the `projects` array inside `script.js`.

## Important

The contact form uses `mailto:` because GitHub Pages is static and does not provide a backend. No visitor data is stored by the website.


## Gallery editor

Open the deployed site with `?gallery=edit#gallery` to preview local uploads. See `GALLERY_UPLOAD_GUIDE.md` for permanent GitHub Pages publishing steps.
