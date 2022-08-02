# LKS 2022 Bidang Cloud Computing - Modul 2
## How to generate the static webpage

Make sure you have yarn or npm.

Create .env.local file with the following variables:
* `NEXT_PUBLIC_API_BASE_URL`: Modul 1 URL
* `NEXT_PUBLIC_API_KEY`: Modul 1 API key

```bash
npm install
# or
yarn install
```


```bash
npm run build
# or
yarn build
```


```bash
npm run export
# or
yarn export
```

Check the out/ directory.

## To run the application locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.
