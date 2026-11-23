# Diogenes Agent & SQL Guardrails GitHub Action

Drop into any `.github/workflows/*.yml` to block prompt/command injections and unsafe SQL migrations automatically (runs on the Diogenes Free Tier, or pass `session_key` for unlimited CI runs).

```yaml
- uses: stand-out-of-my-sun/diogenes-guardrails-action@v1
  with:
    command_text: "echo safe deploy"
    sql_query: "SELECT id, email FROM users WHERE active = 1;"
```
