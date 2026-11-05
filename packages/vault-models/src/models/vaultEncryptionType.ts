// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The names of the vault encryption types.
 */
export const VaultEncryptionType = {
	/**
	 * The ChaCha20Poly1305. (symmetric)
	 */
	ChaCha20Poly1305: 0
} as const;

/**
 * Vault encryption types.
 */
export type VaultEncryptionType = (typeof VaultEncryptionType)[keyof typeof VaultEncryptionType];
