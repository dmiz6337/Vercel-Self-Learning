<?php 
// If you have common header/footer PHP includes, you can replace the HTML below with include statements.
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Information Board</title>
    <link rel="stylesheet" href="/statics/styles.css"> <!-- Adjust if you have a CSS file -->
    <style>
        body { background: #fff; color: #111; margin: 0; font-family: sans-serif; }
        .dark body { background: #000; color: #fff; }
        .container { min-height: 100vh; display: flex; flex-direction: column; }
        .main { flex: 1; }
        .section { display: flex; justify-content: space-between; align-items: center; padding: 2rem 10%; border-bottom: 1px solid #eee; }
        .section:last-child { border-bottom: none; }
        .section-left { flex: 1; }
        .section-right { flex: 1; display: flex; justify-content: center; align-items: center; }
        .title { font-size: 2rem; font-weight: bold; margin-bottom: 1rem; }
        .desc { font-size: 1.25rem; font-weight: 300; }
        .download-btn { background: #111; color: #fff; padding: 0.75rem 2rem; border-radius: 0.5rem; font-weight: 600; border: none; cursor: pointer; transition: background 0.3s; }
        .download-btn:hover { background: #444; }
        .home-link { background: #111; color: #fff; padding: 0.5rem 1.5rem; border-radius: 0.4rem; font-weight: 600; text-decoration: none; transition: background 0.3s; }
        .home-link:hover { background: #444; }
        .footer { text-align: center; padding: 2rem 0; color: #888; }
        @media (max-width: 900px) { .section { flex-direction: column; padding: 2rem 2%; } .section-right, .section-left { width: 100%; } }
    </style>
</head>
<body>
<div class="container">
    <!-- Header -->
    <header style="padding: 2rem 10%; border-bottom: 1px solid #eee;">
        <h1 style="margin: 0; font-size: 2.5rem;">Building Portal</h1>
    </header>
    <main class="main">
        <!-- Section 1 -->
        <div class="section">
            <div class="section-left">
                <h2 class="title">Information Board</h2>
                <p class="desc">Portal for relevant building files.</p>
            </div>
            <div class="section-right">
                <img src="/statics/info_icon.png" alt="section-image" style="max-width: 300px; width: 50%; height: auto;" />
            </div>
        </div>
        <!-- Section 2 -->
        <div class="section">
            <div class="section-left">
                <h2 class="title">Financial Reports</h2>
                <p class="desc">Download the latest financial reports for your building.</p>
            </div>
            <div class="section-right">
                <a href="/statics/2024-financial-report.pdf" class="download-btn" download>Download</a>
            </div>
        </div>
        <!-- Section 3 -->
        <div class="section">
            <div class="section-left">
                <h2 class="title">Building Management & Insurance Certificates</h2>
                <p class="desc">Insurance certificates for building facilities & management staff.</p>
            </div>
            <div class="section-right">
                <a href="/statics/insurance-certificates.pdf" class="download-btn" download>Download</a>
            </div>
        </div>
        <!-- Return Home Button -->
        <div style="display: flex; justify-content: center; margin: 2rem 0;">
            <a href="/" class="home-link">Return Home</a>
        </div>
    </main>
    <footer class="footer">
        &copy; <?php echo date('Y'); ?> Building Portal. All rights reserved.
    </footer>
</div>
</body>
</html>
