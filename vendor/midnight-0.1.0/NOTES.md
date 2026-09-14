# Midnight CLI 0.1.0

Distribution channel: GitHub Release. npm is unpublished.

Runtime: Node.js >= 22 with `node --experimental-strip-types`.

## New machine

1. Download `midnight-0.1.0-unix.tar.gz` or `midnight-0.1.0-win.zip` from the GitHub Release.
2. Verify the archive against `SHA256SUMS.txt`.
3. Unpack, then:

```bash
./bin/midnight --version
./bin/midnight init ./demo
cd demo
../bin/midnight compile --tools all
../bin/midnight lint
```

Compatibility: patch versions of this CLI must keep historical governance facts readable. Breaking schema or rule changes require a major tag and an explicit migration.
