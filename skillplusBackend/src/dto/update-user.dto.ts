import { ApiProperty } from "@nestjs/swagger"
import { User } from "@prisma/client"
import { IsOptional } from "class-validator"

export class UpdateUserDto implements Partial<User>  {
    @IsOptional()
    id:number
    @IsOptional()
    @ApiProperty({ example: '', description: '' })
    email: string
    @ApiProperty({ example: '', description: '' })
    password: string
    @ApiProperty({ example: '', description: '' })
    username:string
}
