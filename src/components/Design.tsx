
import { Design1 } from '@/components/Design1'
import type { SchemaProps } from '@/components/SchemaProps'

export interface DesignProps {
	design:string
	base: string
	schema: SchemaProps
	children: React.ReactNode
}


export function Design({design, base, schema, children}: DesignProps) {

	if(design === 'design1') {
		return  (
			<Design1 base={base} schema={schema}>{children}</Design1>
		  )
	}

	return (
		<Design1 base={base} schema={schema}>{children}</Design1>
	)
}
