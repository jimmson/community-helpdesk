const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({
    zelos: {
        confirmAssignment: {type: Boolean, default: false},
        confirmCompletion: {type: Boolean, default: true}
    },
    email: {
        provider: String,
        fromName: String,
        fromEmail: String,
        sendInvite: Boolean,
    },
    sms: {
        provider: String,
        sendRejectText: Boolean,
        sendAcceptText: Boolean,
        fromName: String,
        sendText: Boolean
    },
    templates: {
        acceptText: {
            type: String,
            default: "Your request has been accepted and published to volunteers"
        },
        rejectText: {
            type: String,
            default: "Unfortunately we can't accept your request. It maybe have not met the requirements or was missing crucial details"
        },
        safetyWarning: {
            type: String,
            default: "This text is added automatically to the assignee-only field on the Zelos task"
        }
    }
}, {
    strict: false,
    minimize: false
});

const ConfigModel = mongoose.model('Config', configSchema)

class Config {
    constructor() {}

    async get(subject, toObject = false) {
        let config = await ConfigModel.findOne();
        // See if config exists in the database
        if (!config) {
            console.log(`[i] No config found, initializing`);
            config = new ConfigModel();

            config.email.provider = process.env.EMAIL_PROVIDER
            config.email.fromName = process.env.EMAIL_FROM_NAME
            config.email.fromEmail = process.env.EMAIL_FROM_EMAIL
            config.email.sendInvite = process.env.SEND_INVITE_EMAIL

            config.sms.provider = process.env.SMS_PROVIDER
            config.sms.sendRejectText = process.env.SEND_REJECT_TEXT
            config.sms.sendAcceptText = process.env.SEND_ACCEPT_TEXT
            config.sms.fromName = process.env.SMS_FROM_NAME
            await config.save();
        } else {
            if (subject) {
                if (toObject) {
                    return config[subject].toObject();    
                } else {
                    return config[subject]
                }
            } else {
                if (toObject) {
                     return config.toObject();
                } else {
                    return config
                }
            }
        }
    }
    
    async update(settings) {
        const config = await ConfigModel.findOne();
        config = {
            ...settings
        };
        await config.save();
        return {
            status: "ok"
        }
    }
}

module.exports = Config;