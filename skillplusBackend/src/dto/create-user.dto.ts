import { ApiProperty } from "@nestjs/swagger"
import { IsOptional } from "class-validator"
export class CreateUserDto   {
    @IsOptional()
    id:number
    @IsOptional()
    @ApiProperty({ example: '', description: '' })
    email: string
    @IsOptional()
      @ApiProperty({ example: '', description: '' })
    family:string
    @ApiProperty({ example: '', description: '' })
    password: string
    @ApiProperty({ example: '', description: '' })
    @IsOptional()
    name: string
    @ApiProperty({ example: '', description: '' })
    username:string
}
