import { ApiProperty } from "@nestjs/swagger"

export class UpdateUserDto   {
  
    id:number
   
    @ApiProperty({ example: '', description: '' })
    email: string
    @ApiProperty({ example: '', description: '' })
    password: string
    @ApiProperty({ example: '', description: '' })
    username:string
}
