# Extract `upload_url` action

This action will extract `upload_url` from `release` workflow payload.

## Inputs

This action does not require any input.

## Outputs

### `upload_url`

The `upload_url` extracted from the payload.

## Example usage

```yml
steps:
  ...
  - uses: seekrtech/release-extract-upload-url@master
    id: extract-upload-url
```

To use the `upload_url` for the next steps:

```yml
steps:
  ...
  - name: Upload binary
    uses: actions/upload-release-asset@v1.0.1
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    with:
      upload_url: ${{ steps.extract-upload-url.outputs.upload-url }}
      asset_path: ${{ env.BINARY_NAME }}
      asset_name: ${{ env.BINARY_NAME }}
      asset_content_type: application/octet-stream
```