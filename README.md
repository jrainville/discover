
# Discover  

Discover new and useful DApps that are mobile-friendly and easy to use. Viewing curated information does not require any special tools, though effecting the way information is ranked will require a web3 wallet, whether that is Status, MetaMask, Trust, Brave or whichever one you prefer.

**Steps to run the app:**

Open the `app-deployment` branch and do **`npm run start`**. This will start the front-end and the API with the latest changes

To run the app locally:
    1. Open the `deployment` branch
    2. **`npm run build`**
    3. Copy the build content and paste it in the /back-end/frontend folder
    4. Create .env file in the back-end folder with the following content
```
    PORT=4000
    ENVIRONMENT='DEV'
    
    # Required
    DB_CONNECTION="mongodb://localhost:27017/{your mongod db name}"

    # Required
    ADMIN_USER="" 
    # Required
    ADMIN_PASSWORD=""

    IPFS_PORT="5001"
    IPFS_HOST="ipfs.infura.io"
    IPFS_PROTOCOL="https"

    APPROVER_MAIL=""
    APPROVE_NOTIFIER_MAIL=""

    EMAIL_HOST=
    EMAIL_PORT=
    EMAIL_TLS=
    EMAIL_USER=
    EMAIL_PASSWORD=

    # 1 hour
    RATE_LIMIT_TIME=15
    # 1 request per hour
    MAX_REQUESTS_FOR_RATE_LIMIT_TIME=1

    # Required
    DISCOVER_CONTRACT="0xad28BF7423874B678dFAFb526433c62624dcaB45"
    # Required
    BLOCKCHAIN_CONNECTION_POINT="wss://ropsten.infura.io/ws/v3/{infura project id}"
```
5. In the back-end folder do `npm run start`
    

**Ropsten contracts:**
SNT - 0x25B1bD06fBfC2CbDbFc174e10f1B78b1c91cc77B
Discover - 0xd34aae5b764d720ba5b438b29d60e5e9601cf3a9
