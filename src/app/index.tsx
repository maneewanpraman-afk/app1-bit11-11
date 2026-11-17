//นำเข้า วิว ข้อความ จาก ชื่อไลบรารี่
import {View , Text , StyleSheet , Image} from 'react-native';

//ส่งออก เริ่มต้น ฟังก์ชัน ชื่อฟังก์ชัน
export default function App(){
  return(
    <View style={homeStyle.container} >
      <Text style={homeStyle.title}></Text>

      <Image source={require('@/assets/T.png')}
      style={{
        width: 200, // กว้าง
        height: 200, // สูง
        borderRadius: 100, // มุมโค้ง
        borderWidth: 8,
        borderColor: "lightblue",
      }}
      />

      <Text style={homeStyle.title}>Maneewan Praman</Text>
      <Text style={homeStyle.title2}>I love tiktok</Text>
    
    <View style={homeStyle.card}>
      <Text>ห้อง BIT1/1 เลขที่ 11</Text>
      <Text>Email : maneewan.praman@e-tech.ac.th</Text>
      <Text>Phone : 09x-xxx-xxxx</Text>
    </View>
    
    
    <View style={homeStyle.card2}>
      <Text style={homeStyle.title3}>ภาพกิจกรรม</Text>
    </View>
     
     <View style={homeStyle.png}>
      
      <Image source={require('@/assets/C.png')} 
      style={{
        width: 120,
        height: 120,
        borderRadius: 20,
      }}/>

       <Image source={require('@/assets/B.png')} 
      style={{
        width: 120,
        height: 120,
        borderRadius: 20,
      }}/>

       <Image source={require('@/assets/A.png')} 
      style={{
        width: 120,
        height: 120,
        borderRadius: 20,
      }}/>


     </View>
    
    
    </View>
  )
}
//สร้างสไตล์ตกเเต่ง
const homeStyle = StyleSheet.create({
  container:{
    backgroundColor: "white", // สีพื้นหลัง
    flex:1, // ขยายเต็มพื้นที่
    alignItems: "center",
  },
  title:{
    color: "black", // สีอักษร
    fontSize: 32, // ขนาดอักษร
    fontWeight: 700, // ความหนา
    fontStyle: "italic", // เอียง
    textAlign: "center",
  },
  title2:{
    color: "grey",
    fontSize: 15,
    fontWeight: 500,
    fontStyle: "normal",
    textAlign: "center",
  },
  card:{
    backgroundColor: "lightgrey",
    width: 350,
    height: 115,
    borderRadius: 10,
    textAlign: "center",
    margin: 15,
    padding: 10,
    gap: 13,
  },
  card2:{
    backgroundColor: "white",
    width: 350,
    height: 115,
    borderRadius: 10,
    textAlign: "center",
    margin: 15,
    padding: 10,
    gap: 10,
  },
  title3:{
    fontSize: 20,
    fontWeight: 700,
  },
  png:{
    flexDirection: "row",
    gap: 20,
  }

})