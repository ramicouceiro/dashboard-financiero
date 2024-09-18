"use client"

import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: 'Jan', balance: 400 },
  { name: 'Feb', balance: 300 },
  { name: 'Mar', balance: 600 },
  { name: 'Apr', balance: 800 },
  { name: 'May', balance: 500 },
  { name: 'Jun', balance: 700 },
]

interface DashboardCardProps {
    className?: string;
  }

export default function BalanceChart( { className }: DashboardCardProps ) {
  return (
    <div className={`w-full max-w-3xl mx-auto shadow-neomorphic hover:shadow-neomorphicInset transition duration-150 ease-in-out border-none rounded-xl bg-background ${className}`}>
      <div className='hover:scale-95 transition duration-150 ease-in-out'>
        <CardHeader>
            <CardTitle className="text-xl font-semibold">Ahorro mensual</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full p-4 shadow-neomorphicInset rounded-xl bg-background">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#ecf0f3', 
                    borderRadius: '10px', 
                    boxShadow: '-5px -5px 10px #fff, 5px 5px 10px #d1d9e6',
                    border: 'none',
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="balance" 
                  stroke="#42a621" 
                  strokeWidth={3} 
                  dot={{ 
                    stroke: '#42a621', 
                    strokeWidth: 2, 
                    r: 4, 
                    fill: '#ecf0f3',
                    strokeDasharray: '', 
                  }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </div>
    </div>
  )
}