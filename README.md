# Test Talenta Indonesia Raya

Langkah-langkah yang diperlukan setelah clone:

## 1. Sisi Client
### a. Install Packages
```javascript
npm install
```

## 2. Sisi Server
### a. Install Packages
```javascript
npm install
```

### b. Buat Database
```sql
Pastikan sudah membuat database dengan nama `db_test`
```

### c. Lakukan Migrasi
```javascript
npx sequelize-cli db:migrate
```

Lalu masuk ke folder `client` dan jalankan:
```javascript
npm run dev
```
**Perintah ini akan menjalankan client dan server secara bersamaan**
