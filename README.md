# linshigreenfire.github.io

Personal website for Lin Shi — sustainability scientist working on responsible AI, life cycle assessment, and technology supply chains.

## Structure

```
├── index.html            # Landing page (hero + research overview)
├── research.html         # Research areas and selected work
├── publications.html     # Full publications list
├── about.html            # Bio, background, and contact
├── CNAME                 # Custom domain config
├── README.md
└── assets/
    ├── css/
    │   └── styles.css    # Shared stylesheet
    ├── js/
    │   └── main.js       # Shared scripts (year, active nav)
    └── images/
        ├── headshot.jpg
        ├── about.jpg
        ├── responsible-ai.jpg
        ├── digital-systems.jpg
        ├── technology-value-chains.jpg
        ├── research.jpg
        └── fieldwork.jpg
```

## Local development

Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deployment

Hosted on GitHub Pages. Push to `main` branch to deploy.
