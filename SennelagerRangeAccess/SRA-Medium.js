<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Scriptable Import in 3 Schritten</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      max-width: 600px;
      margin: 2rem auto;
      padding: 1rem;
      background-color: #f0f0f5;
      color: #333;
      text-align: center;
    }
    h1 {
      margin-bottom: 2rem;
    }
    section {
      background: white;
      border-radius: 10px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    button {
      background-color: #007aff;
      border: none;
      color: white;
      padding: 1rem 2.5rem;
      font-size: 1.3rem;
      border-radius: 12px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      margin-top: 1rem;
    }
    button:hover {
      background-color: #005ecb;
    }
    pre {
      background: #222;
      color: #0f0;
      padding: 1rem;
      border-radius: 8px;
      text-align: left;
      font-size: 1rem;
      overflow-x: auto;
      user-select: all;
      margin-top: 1rem;
      max-height: 300px;
    }
    .copied {
      color: green;
      margin-top: 0.5rem;
      font-weight: bold;
    }
    a.store-link {
      text-decoration: none;
      color: white;
      display: inline-block;
      padding: 0.8rem 2rem;
      border-radius: 12px;
      background-color: #28a745;
      transition: background-color 0.3s ease;
      font-weight: bold;
    }
    a.store-link:hover {
      background-color: #1e7e34;
    }
  </style>
</head>
<body>

  <h1>Scriptable Import in 3 Schritten</h1>

  <section>
    <h2>Schritt 1: Scriptable aus dem App Store laden</h2>
    <a class="store-link" href="https://apps.apple.com/app/scriptable/id1405459188" target="_blank" rel="noopener noreferrer">
      Scriptable im App Store öffnen
    </a>
  </section>

  <section>
    <h2>Schritt 2: Script von GitHub laden und kopieren</h2>
    <p>Klicke auf den Button, um den Script-Code in die Zwischenablage zu kopieren.</p>
    <button id="copyBtn">Code von GitHub laden & kopieren</button>
    <pre id="codeBlock">Lade Script…</pre>
    <div id="copyMsg" class="copied" style="display:none;">Code kopiert! Jetzt Scriptable öffnen.</div>
  </section>

  <section>
    <h2>Schritt 3: Script in Scriptable öffnen</h2>
    <p>Klicke den Button, um Scriptable zu öffnen und das Script zu importieren.</p>
    <button onclick="window.location.href='scriptable:///run?scriptName=SRA-Medium&name=SRA%20Medium&source=https%3A%2F%2Fraw.githubusercontent.com%2Fprojectreturn%2FScriptable%2Fmain%2FSennelagerRangeAccess%2FSRA-Medium.js&docs=https%3A%2F%2Fgithub.com%2Fprojectreturn%2FScriptable%2Ftree%2Fmain%2FSennelagerRangeAccess'">
      Script in Scriptable öffnen
    </button>
  </section>

  <script>
    const copyBtn = document.getElementById('copyBtn');
    const codeBlock = document.getElementById('codeBlock');
    const copyMsg = document.getElementById('copyMsg');

    async function loadAndCopy() {
      copyBtn.disabled = true;
      copyBtn.textContent = 'Lade Script...';

      try {
        const response = await fetch('https://raw.githubusercontent.com/projectreturn/Scriptable/main/SennelagerRangeAccess/SRA-Medium.js');
        if (!response.ok) throw new Error('Netzwerkfehler');

        const text = await response.text();
        codeBlock.textContent = text;

        await navigator.clipboard.writeText(text);
        copyMsg.style.display = 'block';
        copyBtn.textContent = 'Code kopiert!';
      } catch (e) {
        codeBlock.textContent = 'Fehler beim Laden des Scripts. Bitte manuell öffnen: ' +
          'https://raw.githubusercontent.com/projectreturn/Scriptable/main/SennelagerRangeAccess/SRA-Medium.js';
        alert('Fehler beim Laden des Scripts: ' + e.message);
        copyBtn.textContent = 'Erneut versuchen';
      } finally {
        copyBtn.disabled = false;
        setTimeout(() => {
          copyMsg.style.display = 'none';
          copyBtn.textContent = 'Code von GitHub laden & kopieren';
        }, 2500);
      }
    }

    copyBtn.addEventListener('click', loadAndCopy);
  </script>

</body>
</html>
