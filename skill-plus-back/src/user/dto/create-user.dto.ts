import { ApiProperty } from "@nestjs/swagger"
export class CreateUserDto {

    id: number

    @ApiProperty({ example: '', description: '' })
    email: string

    @ApiProperty({ example: '', description: '' })
    family: string
    @ApiProperty({ example: '', description: '' })
    password: string
    @ApiProperty({ example: '', description: '' })

    name: string
    @ApiProperty({ example: '', description: '' })
    username: string
}
