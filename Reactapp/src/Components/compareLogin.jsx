function Login(){
    const navigate = useNavigate();
    const{
      register,
      handleSubmit,
      reset,formState:{errors}}= useForm();
    }
    const onsubmit=async(data)=>{
      try{
      const{email,password,username}=data;
      const formData=new FormData();
      formData.append("email",email);
      formData.append("password",password);
      formData.append("username",username);
  
      const response=await axios.post(`http://localhost:4000/crime/register/login`,formData,
        {
  headers:{
    "Content-Type":"application/json"
  }
        }
      )
      Notify.success("Login Successful")
      reset();
      const userToken=response.data;
      localStorage.setItem("userToken",JSON.stringify(userToken));
      const userRole=userToken?.user?.userRole;
      if(Role==="Admin")
      {
        navigate("/Dashboard")
      }
      // else if(Role==="government"){
      //   navigate("/government")
      // }
      else{
        navigate("/landing page")
      }
      }
      catch(error){
        console.log(error);
      }
    }
    return(
      <form onSubmit={handleSubmit(onsubmit)}>
        <input>
        type="email",
        name="email"
        className="email1"
        placeholder="Enter your email"
        {...register("username",{required:true})}
        </input>
        <button>Sign up</button>
  
      </form>
    
  
    )