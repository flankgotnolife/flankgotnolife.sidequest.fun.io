import shutil
import os
import zipfile

# Paths
source_dir = '/mnt/data/sidequest_extracted/client'
build_dir = '/mnt/data/sidequest_github'
zip_output = '/mnt/data/sidequest_github_ready.zip'

# Create a copy of the client folder for building static version
if os.path.exists(build_dir):
    shutil.rmtree(build_dir)
shutil.copytree(source_dir, build_dir)

# Remove files that won't work on GitHub Pages (backend, tsconfig, tests, etc.)
for root, dirs, files in os.walk(build_dir):
    for file in files:
        if file.endswith(('.ts', '.tsx', '.json', '.test.ts', '.d.ts')) and 'index.html' not in root:
            os.remove(os.path.join(root, file))

# Make the ZIP file
with zipfile.ZipFile(zip_output, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(build_dir):
        for file in files:
            file_path = os.path.join(root, file)
            zipf.write(file_path, os.path.relpath(file_path, build_dir))

zip_output
