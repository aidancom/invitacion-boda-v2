import pymongo, os
from dotenv import load_dotenv

load_dotenv()

conn = pymongo.MongoClient(os.getenv('DATABASE_STRING'))

database = conn['weeding']

column_guests = database['guests']