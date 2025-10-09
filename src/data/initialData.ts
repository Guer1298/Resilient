export const allCamisas = [
	{
		brand: 'Nike',
		colors: [{ color: '#0000FF', color_name: 'Azul' }],
		created_at: new Date().toISOString(),
		description: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{ type: 'text', text: 'Camiseta oficial del FC Barcelona, temporada 2023/24.' },
					],
				},
			],
		},
		features: ['Tela Dri-FIT', 'Edición jugador', 'Escudo bordado'],
		id: '1a2b3c4d-0001',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Camiseta FC Barcelona 2023/24',
		price: 89.99,
		slug: 'camiseta-fc-barcelona-2023-24',
		variants: [
			{
				color: '#0000FF',
				color_name: 'Azul',
				id: '1a2b3c4d-0001v1',
				price: 89.99,
				stock: 12,
				size: 'M',
				storage: 'Standard',
			},
		],
	},
	{
		brand: 'Adidas',
		colors: [{ color: '#FFFFFF', color_name: 'Blanco' }],
		created_at: new Date().toISOString(),
		description: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{ type: 'text', text: 'Camiseta Real Madrid, edición local 2023/24.' },
					],
				},
			],
		},
		features: ['Tecnología HEAT.RDY', 'Cuello redondo', 'Escudo termotransferido'],
		id: '1a2b3c4d-0002',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Camiseta Real Madrid 2023/24',
		price: 94.99,
		slug: 'camiseta-real-madrid-2023-24',
		variants: [
			{
				color: '#FFFFFF',
				color_name: 'Blanco',
				id: '1a2b3c4d-0002v1',
				price: 94.99,
				stock: 8,
				size: 'L',
				storage: 'Standard',
			},
		],
	},
	{
		brand: 'Puma',
		colors: [{ color: '#FF0000', color_name: 'Rojo' }],
		created_at: new Date().toISOString(),
		description: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{ type: 'text', text: 'Camiseta oficial del AC Milan, temporada 2023/24.' },
					],
				},
			],
		},
		features: ['DryCELL', 'Corte Slim', 'Escudo bordado'],
		id: '1a2b3c4d-0003',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Camiseta AC Milan 2023/24',
		price: 84.99,
		slug: 'camiseta-ac-milan-2023-24',
		variants: [
			{
				color: '#FF0000',
				color_name: 'Rojo',
				id: '1a2b3c4d-0003v1',
				price: 84.99,
				stock: 10,
				size: 'M',
				storage: 'Standard',
			},
		],
	},
	{
		brand: 'Umbro',
		colors: [{ color: '#008000', color_name: 'Verde' }],
		created_at: new Date().toISOString(),
		description: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{ type: 'text', text: 'Camiseta oficial de la Selección Colombia Retro 1998.' },
					],
				},
			],
		},
		features: ['Edición Retro', 'Algodón Premium', 'Detalles dorados'],
		id: '1a2b3c4d-0004',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Camiseta Colombia Retro 1998',
		price: 79.99,
		slug: 'camiseta-colombia-retro-1998',
		variants: [
			{
				color: '#008000',
				color_name: 'Verde',
				id: '1a2b3c4d-0004v1',
				price: 79.99,
				stock: 5,
				size: 'XL',
				storage: 'Standard',
			},
		],
	},
	{
		brand: 'Nike',
		colors: [{ color: '#000000', color_name: 'Negro' }],
		created_at: new Date().toISOString(),
		description: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{ type: 'text', text: 'Camiseta del Paris Saint-Germain, edición Jordan 2023.' },
					],
				},
			],
		},
		features: ['Colaboración Jordan', 'Dri-FIT ADV', 'Escudo bordado'],
		id: '1a2b3c4d-0005',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Camiseta PSG Jordan 2023',
		price: 109.99,
		slug: 'camiseta-psg-jordan-2023',
		variants: [
			{
				color: '#000000',
				color_name: 'Negro',
				id: '1a2b3c4d-0005v1',
				price: 109.99,
				stock: 7,
				size: 'L',
				storage: 'Standard',
			},
		],
	},
];

export const recentCamisas = [
	allCamisas[0],
	allCamisas[1],
	allCamisas[2],
	allCamisas[3],
];

export const popularCamisas = [
	allCamisas[4],
	allCamisas[1],
	allCamisas[2],
	allCamisas[0],
];
