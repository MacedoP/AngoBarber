"use server"


import { db } from "../lib/prisma"

interface CreateBookingParams {
    userId:       string
    serviceId:    string
    date: Date

}

export const createBooking = async (params: CreateBookingParams) => {
    await db.booking.create({
        data:params
    })
}

/*
"use server"

import { db } from "../lib/prisma"

interface CreateBookingParams {
    userId:       string
    serviceId:    string
    date: Date
    barbershopId:  string

}

export const createBooking = async ({serviceId, userId, date, barbershopId}: CreateBookingParams) => {
    await db.booking.create({
        data: {
            serviceId,
            userId,
            date,
            barbershopId

        }
    })
}
*/