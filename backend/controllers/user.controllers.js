
export const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find();

    res.status(200).json({
      status: "success",
      message: "users retrieved successfully",
      data: { allUsers },
    });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Server error",
      error: error.message,
    });
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next("No user found with that ID", 404);
    }

    res.status(200).json({
      success: true,
      data: { user },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
