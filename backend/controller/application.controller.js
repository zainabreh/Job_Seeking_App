import applicationModel from "../model/application.model.js";

export const getRecuiterApplication = async (req, res, next) => {
  try {
    const { id } = req.user;

    const applications = await applicationModel.find({ recuiter_id: id });

    res.json({
      success: true,
      applications,
    });
  } catch (error) {
    next(error);
  }
};
export const getEmployerApplication = async (req, res, next) => {
  try {
    const { id } = req.user;

    const applications = await applicationModel.find({ applicant_id: id });

    res.json({
      success: true,
      applications,
    });
  } catch (error) {
    next(error);
  }
};

export const createApplication = async (req, res, next) => {
  try {
    const { id } = req.user;
    const appBody = req.body;

    const uploadResult = await cloudinary.uploader.upload(req.body.resume, {
      folder: "job-finding-app",
    });

    if (uploadResult) {
      appBody.resume = uploadResult.secure_url;
    }

    const applicant = {
        user: req.user.id
    }

    const jobDetails = await applicationModel.findById(appBody.id)

    if(!jobDetails){
        return next(new Error("Job not Found"))
    }

    const recuiter = {
        user : jobDetails.postedBy
    }

    const application = await applicationModel.create({
      ...appBody,
      applicant_id: applicant,
      recuiter_id:recuiter
    });

    res.json({
      success: true,
      message: "Application created successfully",
      application,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteApplication = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleteApplication = await applicationModel.findByIdAndDelete(id);

    if (!deleteApplication) {
      return next(new Error("Application Not Found"));
    }

    res.json({
      success: true,
      message: "Deleted successfully",
      deleteApplication,
    });
  } catch (error) {
    next(error);
  }
};
export const updateApplication = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updateApplication = await applicationModel.findByIdAndUpdate(id);

    if (!updateApplication) {
      return next(new Error("Application Not Found"));
    }

    res.json({
      success: true,
      message: "Updated successfully",
      updateApplication,
    });
  } catch (error) {
    next(error);
  }
};
