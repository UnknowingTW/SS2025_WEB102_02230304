# Practical 5 – Using Supabase Cloud Storage

In this project, the TikTok app is improved by switching from saving files locally to storing videos and thumbnails in **Supabase Cloud Storage**. This makes storage more scalable and easier to manage.

---

### 1. Install Supabase Packages

#### Backend

Go to the backend folder and install Supabase client:

```bash
cd server
npm install @supabase/supabase-js
````

#### Frontend

Go to the frontend folder and install Supabase too:

```bash
cd tiktok_frontend
npm install @supabase/supabase-js
```

---

## Supabase Setup

### Buckets Created

* `videos`: for uploaded video files
* `thumbnails`: for video thumbnails

### Access Rules

* Uploading allowed only for logged-in users
* Reading allowed for both logged-in and anonymous users

---

## Backend Configuration

### Add Environment Variables (`.env`)

```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_KEY=your-service-key
SUPABASE_PUBLIC_KEY=your-public-key
SUPABASE_STORAGE_URL=https://your-project-id.supabase.co/storage/v1
```

### Code Changes

* `src/lib/supabase.js`: creates Supabase client
* `src/services/storageService.js`: handles uploading files to Supabase
* `videoController.js`: updated to save file info in Supabase instead of local disk
* `schema.prisma`: updated video model to include cloud file paths

Example Prisma model changes:

```prisma
model Video {
  ...
  videoUrl             String
  thumbnailUrl         String?
  videoStoragePath     String?
  thumbnailStoragePath String?
}
```

---

## Frontend Configuration

### Environment Variables (`.env.local`)

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLIC_KEY=your-public-key
```

### Key Files Updated

* `src/lib/supabase.js`: frontend Supabase client
* `uploadService.js`: handles uploading files directly to Supabase
* `upload/page.jsx`: new upload page with Supabase integration
* `VideoCard.jsx`: loads videos and thumbnails from Supabase URLs

---

## Migrating Existing Files

If you have videos stored locally and want to move them to Supabase, run this script:

```bash
cd server
node scripts/migrateVideosToSupabase.js
```

---

## Final Testing and Cleanup

1. Try uploading videos and check they play correctly from Supabase
2. After confirming everything works, delete the old `uploads/` folder
3. Make sure public access rules are correctly set on Supabase
