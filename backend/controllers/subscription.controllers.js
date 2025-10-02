export const createSubscription = async(req,res,next) =>{
  try{
    const newSubscription = await Subscription.create(req.body);

    res.status(201).json({
      status:'success',
      message: 'subscription created successfully',
      data: { newSubscription  },
    })
  } catch (error) {
    res.status(500).json({
      status:'failure',
      message:'Server error',
      error: error.message,
    })
  }

}

export const getAllSubscriptions =async(req,res,next )=>{
  try{
    const allSubscriptions = await Subscription.find();

    res.status(200).json({
      status:'success',
      message: 'subscription created successfully',
      data: { allSubscriptions  },
    })
  } catch (error) {
    res.status(500).json({
      status:'failure',
      message:'Server error',
      error: error.message,
    })
  }
}

export const getSubscriptionById = async(req,res,next)=>{
try{
  const subscription =await Subscription.findById(req.params.id);
  if (!subscription){
     return next( 'No subscription found with that ID', 404)
    }
   res.status(200).json({
      success: true,
      data: { subscription },
       });
     } catch (error) {
      res.status(500).json({
      success: false,
       message: "Server error",
       error: error.message,
     });

}
};

 export const updateSubscription = async (req, res,next) => {
  try {
    const subscription = await Subscription.findByIdAndUpdate(req.params.id, req.body,{
          new: true,
          runValidators:true
        })
        
        if (!subscription){
     return next( 'No subscription found with that ID', 404)
    }

    res.status(200).json({
      success: true,
      message: "Subscription updated successfully",
      data: { subscription },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const deleteSubscription = async (req, res,next) => {
  try {
    const subscription = await Subscription.findByIdAndDelete(req.params.id);
       if (!subscription){
        return next('No subscription found with that ID', 404)
       }

    res.status(200).json({
      success: true,
      message: "Subscription deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

