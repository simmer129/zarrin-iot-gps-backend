import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from 'src/core/entity/device.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeviceService {
 constructor(
    @InjectRepository(Device)
    private deviceRepository: Repository<Device>,
 ){ }   

 insertGroup (device : any): Promise<any[]>{

//    device.location.forEach((element, i) => {
//       if (element.length!=0){
//       const dbData  = {
//           name : "gps",
//           serial : device.SN,
//           lat : element.LA,
//           lon : element.LO,
//           signal : element.SI,
//           battery : element.BA,
//           speed: element.SP,
//           recordIndex : element.RI
//       }
//       console.log("looooooogs is : "+ JSON.stringify(dbData)) 
//    }else{
//          console.log("element is empty");
//       }         
//   });
   console.log("kjsaldsd: ",JSON.stringify (device));
   return this.deviceRepository.save(device);
 }

 save(device: any[]): Promise<any[]>{
   console.log(device);
    return this.deviceRepository.save(device);
   }

 findById(id: string): Promise<Device>{
    return this.deviceRepository.findOne({where:{id}});
 }

 findAll(): Promise<Device[]>{
    return this.deviceRepository.find();
 }
}
