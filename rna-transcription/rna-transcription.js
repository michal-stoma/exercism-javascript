const RNA_MAP = {
    'G': 'C',
    'T': 'A',
    'C': 'G',
    'A': 'U'
}

export const toRna = dna => dna.replace(/./g, c => RNA_MAP[c]);
