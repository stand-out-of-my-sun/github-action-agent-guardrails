# Diogenes Agent & SQL Guardrails GitHub Action

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Powered by Diogenes](https://img.shields.io/badge/Powered%20By-Diogenes%20Gateway-purple.svg)](https://diogenesgateway.com)

Drop into any `.github/workflows/*.yml` to block prompt injections, destructive shell commands, and unsafe SQL migrations automatically. Runs on the **100% Free Developer Tier** (zero keys required) or with a prepaid session key (`dg_sec_...`) for unlimited high-frequency CI/CD runs:

```yaml
- uses: stand-out-of-my-sun/diogenes-guardrails-action@v1
  with:
    command_text: "echo safe deploy"
    sql_query: "SELECT id, email FROM users WHERE active = 1;"
    # Optional: pass your prepaid session key for unlimited CI execution
    session_key: ${{ secrets.DIOGENES_SESSION_KEY }}
```

### Fast-Path Session Keys
Need high-volume CI/CD pipeline execution? Top up via Card or Apple Pay at [https://diogenesgateway.com/#prepay-checkout-widget](https://diogenesgateway.com#prepay-checkout-widget) (\$5 Starter, \$20 Builder, \$100 Fleet) and add `DIOGENES_SESSION_KEY` to your GitHub repository secrets.
