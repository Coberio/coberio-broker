
import { Design1 } from '@/components/Design1'
import type { SchemaProps } from '@/components/SchemaProps'

export interface DesignProps {
	design:string
	schema: SchemaProps
	children: React.ReactNode
}


export function Design({design, schema, children}: DesignProps) {

	if(design === 'design1') {
		return  (
			<Design1 schema={schema}>{children}</Design1>
		  )
	}

	return (
		<Design1 schema={schema}>{children}</Design1>
	)
}
