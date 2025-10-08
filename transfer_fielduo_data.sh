#!/bin/bash
# ===============================================
# MongoDB Atlas Data Transfer Script (macOS)
# Copies entire 'fielduo' database (all collections)
# From old cluster -> new cluster
# ===============================================

echo "🚀 Starting MongoDB data transfer..."

# ----- Source (old) MongoDB -----
SOURCE_URI="mongodb+srv://muynmuyn786_db_user:moin1234@fielduo.1okhaph.mongodb.net/fielduo?retryWrites=true&w=majority&appName=fielduo"

# ----- Destination (new) MongoDB -----
DEST_URI="mongodb+srv://moin_db_user:ZLqwHjLW7QlwVlVk@fielduodb.v7lnyji.mongodb.net/fielduo?retryWrites=true&w=majority&appName=Fielduodb"

# ----- Step 1: Export from Source -----
echo "📦 Exporting data from old MongoDB cluster..."
mongodump --uri="$SOURCE_URI" --db=fielduo --out=dump

if [ $? -ne 0 ]; then
  echo "❌ Error during export. Please check your MongoDB URI or network connection."
  exit 1
fi

# ----- Step 2: Import into Destination -----
echo "📥 Importing data into new MongoDB cluster..."
mongorestore --uri="$DEST_URI" --nsInclude="fielduo.*" --drop dump/fielduo

if [ $? -ne 0 ]; then
  echo "❌ Error during import. Please verify destination cluster credentials."
  exit 1
fi

echo "✅ Successfully transferred all 'fielduo' collections to new MongoDB cluster!"
