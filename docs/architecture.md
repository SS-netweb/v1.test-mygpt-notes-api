# Architectuur & Security

## Wat is dit?
Dit document legt de structuur en beveiliging van dit project uit.  
Het is belangrijk voor overzicht, audits en educatie.

## Projectstructuur
- **backend-node**: Node.js backend (API in JavaScript)
- **backend-python**: Python backend (API in Python)
- **docs**: documentatie en plannen

## Security aanpak
1. **Geen secrets in de code** – we gebruiken `.env` voor gevoelige data.  
2. **Least privilege** – we geven systemen alleen de rechten die ze nodig hebben.  
3. **Audit trail** – alles wordt stap voor stap gelogd (zoals dit document).  

## Deployment (komt later)
We gebruiken Render.com voor het veilig online zetten van de backend.
