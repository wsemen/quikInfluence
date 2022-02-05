module.exports = {
	collectCoverageFrom: [
		'**/*.{js,jsx,ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
	],
	coveragePathIgnorePatterns: [
		'<rootDir>/build/',
		'<rootDir>/node_modules/',
		'<rootDir>/.next/',
		'<rootDir>/coverage/',
		'<rootDir>/pages/api/',
		'<rootDir>/pages/_app.tsx',
		'<rootDir>/pages/_document.tsx',
		'<rootDir>/.*.js',
		'<rootDir>/*.*.js',
	],
	moduleNameMapper: {
		// Handle CSS imports (with CSS modules)
		// https://jestjs.io/docs/webpack#mocking-css-modules
		'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

		// Handle CSS imports (without CSS modules)
		'^.+\\.(css|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.ts',

		// Handle image imports
		// https://jestjs.io/docs/webpack#handling-static-assets
		'^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/src/__mocks__/fileMock.ts`,

		// Handle module aliases
		'^components/(.*)$': '<rootDir>/src/components/$1',
		'^modules/(.*)$': '<rootDir>/src/modules/$1',
		'^modules$': '<rootDir>/src/modules',
		'^utils/(.*)$': '<rootDir>/src/utils/$1',
		'^types/(.*)$': '<rootDir>/src/types/$1',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
	testEnvironment: 'jsdom',
	transform: {
		// Use babel-jest to transpile tests with the next/babel preset
		// https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
	},
	transformIgnorePatterns: [
		'/node_modules/',
		'^.+\\.module\\.(css|sass|scss)$',
	],
}