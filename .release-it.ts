import type {
	Config,
} from 'release-it'

export default {
	git: {
		commitMessage: "chore: release ${version}",
		tagName: "v${version}",
		push: true,
	},
	github: {
		release: false,
		tokenRef: "GITHUB_TOKEN",
	},
	npm: {
		publish: true,
	},

	hooks: {
		"before:init": "npm run code-check",
		"after:init": "echo Code is safe",
		"before:git:release": "echo Pushing ${name} to Git...",
		"after:git:release": "echo Successfully pushed ${name} to Git",
		"before:github:release": "echo Making a Github release...",
		"after:github:release": "Successfully created a Github release",
		"after:release": "echo Successfully released ${name} v${version} to ${repo.repository}"
	}
} satisfies Config