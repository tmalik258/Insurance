import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageSquare, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Help & Support Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <Phone className="h-6 w-6 mb-4 text-indigo-700" />
              <h3 className="font-semibold mb-2">Toll Free</h3>
              <p className="text-gray-600">1800-000-000</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <MessageSquare className="h-6 w-6 mb-4 text-indigo-700" />
              <h3 className="font-semibold mb-2">Chat Bot</h3>
              <p className="text-gray-600">Available 24/7</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Mail className="h-6 w-6 mb-4 text-indigo-700" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">support@insurance.com</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
