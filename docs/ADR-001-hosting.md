# ADR-001 — Host Website JJ with CloudFront and Private S3

## Status

Accepted

## Context

Website JJ needs a low-cost AWS-native hosting architecture that supports
a public custom domain, HTTPS, static Next.js output, and future iteration.

## Options Considered

1. Public S3 website endpoint
2. Private S3 REST origin with CloudFront OAC
3. Third-party hosting platform
4. Node.js-based Next.js hosting

## Decision

Use Next.js static export deployed to a private S3 bucket.

Use CloudFront as the public HTTPS and CDN layer.

Use Origin Access Control so the S3 bucket remains private.

Use Route 53 Alias records to route the custom domain to CloudFront.

Use an ACM certificate in us-east-1 for the CloudFront custom domain.

## Request Flow

Browser
→ Route 53
→ CloudFront
→ private S3 origin

On a cache hit, CloudFront returns the cached file.

On a cache miss, CloudFront retrieves the file from S3, caches it,
and returns it to the browser.

## Rationale

- AWS-native learning value
- Low infrastructure cost
- No server required for the current static website
- HTTPS and CDN support
- Private origin
- Compatible with the current V0.1 scope

## Trade-offs

- Static export cannot use Next.js features that require a Node.js server
- CloudFront caching can temporarily serve older files
- Deployment requires uploading build output and managing invalidation
- Final content changes require a new build and deployment

## Security

- Keep S3 Block Public Access enabled
- Permit S3 reads through CloudFront OAC
- Redirect viewers from HTTP to HTTPS
- Do not expose the S3 bucket as the public website endpoint

## Validation

- Next.js produces an out/ directory
- CloudFront URL loads the website
- Direct S3 public access is blocked
- Custom domain resolves to CloudFront
- HTTPS certificate is valid
- Desktop and mobile production QA pass

## Revisit When

- Website JJ requires server-side rendering
- Authentication is introduced
- Dynamic APIs become part of the frontend runtime
- A CMS requires server-side behavior