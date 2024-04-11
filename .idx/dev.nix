{ pkgs, ... }: {

  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
    pkgs.corepack_20
  ];

  # Sets environment variables in the workspace
  env = {
    SOME_ENV_VAR = "hello";
  };

  # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
  idx.extensions = [
    "angular.ng-template"
  ];
# NOTE: This is an excerpt of a complete Nix configuration example.
# For more information about the dev.nix file in IDX, see
# https://developers.google.com/idx/guides/customize-idx-env

# Enable previews and customize configuration
idx.previews = {
  enable = true;
  previews = [
    # The following object sets web previews
    {
      command = [
        "pnpm"
        "run"
        "dev"
        "--"
        "--port"
        "$PORT"
        "-u"
        "0.0.0.0"
      ];
      id = "web";
      manager = "web";
    }
  ];
};
}