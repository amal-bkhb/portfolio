"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { activities } from "@/data/activities";

export function Leadership() {
  return (
    <section id="leadership" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-6 bg-accent rounded-full" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-fg">
              Leadership & Activities
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card-base p-5"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-3">
                <Users size={18} />
              </div>
              <h3 className="font-heading text-sm font-semibold text-fg">
                {activity.role}
              </h3>
              <p className="text-xs text-accent mt-0.5 font-medium">
                {activity.organization}
              </p>
              {activity.description && (
                <p className="text-sm text-muted mt-2">
                  {activity.description}
                </p>
              )}
              {activity.details && (
                <p className="text-xs text-subtle mt-1">
                  {activity.details}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
