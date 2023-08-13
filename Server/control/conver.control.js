
import Conversation from "../models/conver.model.js"

export const getconversation = async (req, res, next) => {
    try {
        const conversations = await Conversation.find(
            req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
          ).sort({ updatedAt: -1 });
          res.status(200).send(conversations);
    } catch (err) {
        next(err)
    }

}

export const createconversation = async (req, res, next) => {
    const newconver = new Conversation({
        id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
        sellerId: req.isSeller ? req.userId : req.body.to,
        buyerId: req.isSeller ? req.body.to : req.userId,
        readBySeller: req.isSeller,
        readByBuyer: !req.isSeller,
      });
    try {
        const savedconver= await newconver.save();
       res.status(201).send(savedconver);
    } catch (err) {
        next(err)
    }

}

export const getsingleconversation = async (req, res, next) => {
    try {
        const conversation = await Conversation.findOne({ id: req.params.id });
    if (!conversation) return next(createError(404, "Not found!"));
    res.status(200).send(conversation);
    } catch (err) {
        next(err)
    }

}

export const updateconversation = async (req, res, next) => {
    try {
        const updatedConv = await Conversation.findOneAndUpdate(
            { id: req.params.id },
            {
              $set: {
                // readBySeller: true,
                // readByBuyer: true,
                ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
              },
            },
            { new: true }
          );
      
          res.status(200).send(updatedConv);  
    } catch (err) {
        next(err)
    }

}